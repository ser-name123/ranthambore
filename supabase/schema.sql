-- Supabase Schema for Ranthambore Wild Life Tour
-- Run this in your Supabase SQL Editor to initialize the database tables

-- 1. Safari Enquiries Table
CREATE TABLE IF NOT EXISTS safari_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    safari_date DATE,
    safari_mode TEXT, -- 'Gypsy (6 Seater)' | 'Canter (20 Seater)' | 'Custom'
    timing_preference TEXT, -- 'Morning Shift' | 'Afternoon Shift' | 'Both / Flexible'
    zone_preference TEXT, -- 'Zone 1-5 (Core)' | 'Zone 6-10 (Buffer)' | 'Best Available'
    adults INTEGER DEFAULT 1,
    children INTEGER DEFAULT 0,
    nationality TEXT DEFAULT 'Indian', -- 'Indian' | 'Foreign National'
    hotel_required BOOLEAN DEFAULT FALSE,
    pickup_required BOOLEAN DEFAULT FALSE,
    notes TEXT,
    status TEXT DEFAULT 'New Enquiry' -- 'New Enquiry' | 'Contacted' | 'Quoted' | 'Awaiting Payment' | 'Confirmed' | 'Cancelled'
);

-- 2. Tour Package Enquiries Table
CREATE TABLE IF NOT EXISTS package_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    package_name TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    travel_date DATE,
    adults INTEGER DEFAULT 2,
    children INTEGER DEFAULT 0,
    hotel_preference TEXT, -- 'Standard' | 'Deluxe' | 'Luxury Heritage'
    notes TEXT,
    status TEXT DEFAULT 'New Enquiry'
);

-- Enable Row Level Security (RLS)
ALTER TABLE safari_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE package_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts from web forms
CREATE POLICY "Allow public insert for safari enquiries" 
ON safari_enquiries FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow public insert for package enquiries" 
ON package_enquiries FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated admins to view/manage
CREATE POLICY "Allow service role full access to safari enquiries"
ON safari_enquiries FOR ALL
TO service_role
USING (true);

CREATE POLICY "Allow service role full access to package enquiries"
ON package_enquiries FOR ALL
TO service_role
USING (true);
