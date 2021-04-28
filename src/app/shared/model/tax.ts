import { Link } from './link';

export interface Tax {
  id: string;
  title: string;
  links?: Link[];
  sub?: Tax[];
  tags?: string[];
}
