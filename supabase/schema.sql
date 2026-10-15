-- Supabase schema for Ranthambore Wild Life Tour
-- Run in the Supabase SQL editor. Safe to re-run.
--
-- All tables have RLS enabled with no anon/authenticated policies: the website
-- reads and writes them only from the server using the service_role key.

-- 1. Editable website content, one JSON document per section
CREATE TABLE IF NOT EXISTS site_content (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Enquiries from the booking modal, quick enquiry form and package CTAs
CREATE TABLE IF NOT EXISTS enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    safari_date DATE,
    safari_mode TEXT,
    timing_preference TEXT,
    zone_preference TEXT,
    adults INTEGER DEFAULT 1,
    children INTEGER DEFAULT 0,
    nationality TEXT,
    notes TEXT,
    source TEXT,
    status TEXT NOT NULL DEFAULT 'New Enquiry', -- 'New Enquiry' | 'Contacted' | 'Quoted' | 'Confirmed' | 'Cancelled'
    admin_notes TEXT
);

CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_status_idx ON enquiries (status);

-- 3. Admin panel accounts (password_hash is scrypt, see src/lib/admin-auth.ts)
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL DEFAULT 'Admin',
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- 4. Public bucket for images uploaded from the admin panel
INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- 5. CMS pages (inner pages rendered by src/app/[slug]) and tour packages.
--    `data` holds a CmsPage / TourPackage document (see src/lib/cms.ts).
CREATE TABLE IF NOT EXISTS pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    data JSONB NOT NULL,
    published BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS packages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    data JSONB NOT NULL,
    published BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

-- 6. Revision history: the previous version of a page, package or content
--    section is stored here before every save (last 30 per item are kept).
CREATE TABLE IF NOT EXISTS revisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity TEXT NOT NULL,          -- 'pages' | 'packages' | 'content'
    ref TEXT NOT NULL,             -- row id, or the content section key
    data JSONB NOT NULL,
    published BOOLEAN,
    created_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS revisions_ref_idx ON revisions (entity, ref, created_at DESC);
ALTER TABLE revisions ENABLE ROW LEVEL SECURITY;

-- 7. Extra enquiry context (added later; safe to re-run)
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS page_url TEXT;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS consent BOOLEAN;
