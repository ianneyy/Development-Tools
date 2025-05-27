import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts Create',
        href: '/posts',
    },
];


export default function PostCreate() {

    const {data, setData, errors, post} = useForm({
        title: " ",
        body: " "
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
           
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
                <Button>Submit</Button>
            </form>
            </div>
        </AppLayout>
    );
}
