import { Link } from './link';

export interface Tax {
  trend?: 'higher' | 'equal' | 'yes' | 'unknown' | 'lower' | 'no';
  id: string;
  title: string;
  links?: Link[];
  sub?: Tax[];
  tags?: string[];
}
