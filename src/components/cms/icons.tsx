import {
  AlertTriangle, Award, Backpack, Ban, Binoculars, Bus, Calendar, Camera, Car, CheckCircle2, ClipboardList, Clock,
  CloudRain, Compass, Droplets, Eye, FileText, Flame, Heart, HelpCircle, Hotel, Info, Landmark, Leaf, Mail, Map,
  MapPin, MessageCircle, Moon, Mountain, PawPrint, Phone, Plane, Route, ShieldCheck, Shirt, Sparkles, Star, Sun,
  Ticket, TrainFront, TreePine, User, Users, Utensils, Wallet, type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/lib/cms';

export const ICONS: Record<IconName, LucideIcon> = {
  car: Car, bus: Bus, compass: Compass, 'map-pin': MapPin, map: Map, clock: Clock, calendar: Calendar, users: Users,
  user: User, camera: Camera, shield: ShieldCheck, check: CheckCircle2, alert: AlertTriangle, info: Info,
  help: HelpCircle, file: FileText, star: Star, sparkles: Sparkles, tree: TreePine, flame: Flame, paw: PawPrint,
  eye: Eye, sun: Sun, moon: Moon, 'cloud-rain': CloudRain, hotel: Hotel, utensils: Utensils, landmark: Landmark,
  binoculars: Binoculars, phone: Phone, message: MessageCircle, mail: Mail, heart: Heart, award: Award,
  ticket: Ticket, route: Route, train: TrainFront, plane: Plane, ban: Ban, backpack: Backpack, shirt: Shirt,
  leaf: Leaf, droplets: Droplets, mountain: Mountain, wallet: Wallet, clipboard: ClipboardList,
};

export function CmsIcon({ name, className }: { name?: IconName; className?: string }) {
  const Icon = name ? ICONS[name] : undefined;
  return Icon ? <Icon className={className} /> : null;
}
