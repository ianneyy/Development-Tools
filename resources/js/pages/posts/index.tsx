import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import { toast } from "sonner";
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];


export default function Posts() {
    const { posts, flash } = usePage().props as {
        posts: { id: number; title: string; body: string }[];
        flash?: { success?: string };
      };

    useEffect(() => {
        if (flash?.success) {
          toast.success(flash.success);
        }
      }, [flash]);


    // const { posts } = usePage().props
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
           
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div className='mb-5'>
                <Link href={route('posts.create')} className='bg-indigo-500 px-4 py-2 rounded-md text-white'>
                    Create Posts
                </Link>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Body</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {posts.map(({id, title, body}) => (

                    <TableRow key={id}>
                        <TableCell className="font-medium">{id}</TableCell>
                        <TableCell>{title}</TableCell>
                        <TableCell>{body}</TableCell>
                        <TableCell className="text-right flex justify-end gap-2">
                            <Link href={route('posts.edit', id)} className='bg-indigo-500 px-4 py-2 rounded-md text-white'>Edit</Link>
                            <Link href={route('posts.destroy', id)} className='bg-red-500 px-4 py-2 rounded-md text-white'>Delete</Link>
                        </TableCell>
                    </TableRow>
                     ))}
                </TableBody>
            </Table>

            </div>
        </AppLayout>
    );
}
