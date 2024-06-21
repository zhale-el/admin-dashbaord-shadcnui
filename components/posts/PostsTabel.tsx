import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostsTabelProps {
  limit?: number;
  title?: string;
}

const PostsTabel = ({ limit, title }: PostsTabelProps) => {
  return <div>posts</div>;
};

export default PostsTabel;
