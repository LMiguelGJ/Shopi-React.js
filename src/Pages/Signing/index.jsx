import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext, useRef, useState } from "react";
import { ShoppingCardContext } from "../../Context";

const Signing = () => {
    const context = useContext(ShoppingCardContext)

    const [view, setView] = useState('user-info')

    const form = useRef(null)


    const setParsedAccount = (newItem) => {
        localStorage.setItem('account', JSON.stringify(newItem))
        context.setAccount(newItem)
    };

    function setParseSignOut(newItem) {
        localStorage.setItem('sign-out', JSON.stringify(newItem))
        context.setSignOut(newItem)
    }

    const hasUserAnAccount = Object.keys(context.account).length > 0  ? true : false

    const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
        setParsedAccount(data)}

    const renderLogin = () => {
        return (
            <div className="flex flex-col w-80 gap-4">
                <p>
                    <span className="font-medium text-xl">Email: </span>
                    <span className=" text-lg">{context.account?.email}</span>
                </p>
                <p>
                    <span className="font-medium text-xl">Password: </span>
                    <span className="text-lg font-medium">{context.account?.password}</span>
                </p>
                <Link to="/">
                    <button
                        className="bg-black disabled:bg-black/40 text-white
                    w-full rounded-lg py-3 mt-4 text-xl font-bold"
                        disabled={!hasUserAnAccount}
                    onClick={() => setParseSignOut(true)}
                    >Login</button>
                </Link>
                <div className="text-center">
                    <a className="font-normal text-lg" href="/">Forgot my password</a>
                </div>
                <button className=" border border-black disabled:text-black/40
                disabled:border-black/40 rounded-lg mt-4 py-3 text-xl font-bold"
                    disabled={hasUserAnAccount}
                onClick={() => setView('create-info-user')}
                >Signing
                </button>
            </div>
        )
    }

    const renderCreateInfoUser = () => {
        return (
            <form ref={form} className='flex flex-col gap-4 w-80'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='font-medium text-sm'>Your name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={context.account?.name}
                  placeholder="Peter"
                  className='rounded-lg border border-black placeholder:font-light
                  placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='font-medium text-sm'>Your email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  defaultValue={context.account?.email}
                  placeholder="hi@helloworld.com"
                  className='rounded-lg border border-black
                  placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-medium text-sm'>Your password:</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  defaultValue={context.account?.password}
                  placeholder="******"
                  className='rounded-lg border border-black
                  placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <Link to="/">
                <button
                  className='bg-black text-white w-full rounded-lg py-3'
                  onClick={() => createAnAccount()}
                  >
                  Create
                </button>
              </Link>
            </form>
          )
    }

    const renderView = () => view === 'create-info-user' ? renderCreateInfoUser() : renderLogin()

    return (
        <>
            <Layout>
                <h1 className="font-bold text-2xl text-center mb-6 w-80 mt-10"
                >Welcome</h1>
                {renderView()}
            </Layout>
        </>
    )
}

export default Signing
