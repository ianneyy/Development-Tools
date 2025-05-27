import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage} from '@inertiajs/react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from "sonner";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts Edit',
        href: '/posts',
    },
];


export default function PostEdit() {
     const { posts } = usePage().props

    const {data, setData, errors, put} = useForm({
        title: posts.title || "",
        body: posts.body || ""
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('posts.update', posts.id));
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit" />
           
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div className='mb-5'>
                <Link href={route('posts.index')} className='bg-indigo-500 px-4 py-2 rounded-md text-white'>
                    Back
                </Link>
            </div>
            <form action=""  onSubmit={submit}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input type="text"
                     id="title"
                      placeholder="Title"
                       name='title'
                    onChange={(e) => setData('title', e.target.value)}
                     value={data.title}
                     />
                     <InputError className='mt-2' message={errors.title}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="body">Body</Label>
                    <Input type="text"
                     id="body"
                      placeholder="Body"
                       name='body'
                    onChange={(e) => setData('body', e.target.value)}
                     value={data.body}
                     />
                     <InputError className='mt-2' message={errors.body}/>
                </div>
                <Button
                >Submit</Button>
            </form>
            </div>
        </AppLayout>
    );
}
