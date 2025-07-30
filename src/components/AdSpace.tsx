import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Star, TrendingUp, Zap } from 'lucide-react';

interface AdSpaceProps {
  position: 'header' | 'sidebar' | 'content' | 'footer';
  className?: string;
}

const AdSpace = ({ position, className = '' }: AdSpaceProps) => {
  return null; // Ad space removed per user request
};

export const HeaderAd = () => <AdSpace position="header" className="mb-8" />;
export const InContentAd = () => <AdSpace position="content" className="my-16 mx-auto max-w-4xl" />;

export default AdSpace;