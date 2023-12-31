import { useContext, useState } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCardContext } from "../../Context";
import { Form } from "react-router-dom";

function MyAccount() {
    const context = useContext(ShoppingCardContext)
    const [view, setView] = useState('user-info')

    const editAccount = () => {
        const formData = new FormData(Form.current)
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            }
    
        // Update account
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)
    }


const renderUserInfo = () => {
    return (
        <div className='flex flex-col w-80'>
        <p>
            <span className='font-medium text-xl'>Name: </span>
            <span>{context.account?.name}</span>
        </p>
        <p>
            <span className='font-medium text-xl'>Email: </span>
            <span>{context.account?.email}</span>
        </p>
        <button
            className='border border-black rounded-lg mt-6 py-3'
            onClick={() => setView('edit-user-info')}>
            Edit
        </button>
        </div>
    )
    }

    const renderEditUserInfo = () => {
    return (
        <form ref={Form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='font-medium text-xl'>Your name:</label>
            <input
            type="text"
            id="name"
            name="name"
            defaultValue={context.account.name}
            placeholder="Peter"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='font-medium text-xl'>Your email:</label>
            <input
            type="text"
            id="email"
            name="email"
            defaultValue={context.account.email}
            placeholder="hi@helloworld.com"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='font-medium text-xl'>Your password:</label>
            <input
            type="text"
            id="password"
            name="password"
            defaultValue={context.account.password}
            placeholder="******"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
        </div>
        <button
            className='bg-black text-white w-full rounded-lg py-3'
            onClick={() => {setView('user-info'), editAccount()}}>
            Edit
        </button>
        </form>
    )
    }

    const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()


    return (
        <>
            <Layout className='bg-red-100'>
                <h1 className=" font-medium text-xl text-center mb-6 w-80">
                {renderView()}
                </h1>
            </Layout>
        </>
    )
}

export default MyAccount
