import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";

const Signing = () => {
    const context = useContext(ShoppingCardContext)
    
    // const setParsedAccount = (newItem) => {
    //     localStorage.setItem('account', JSON.stringify(newItem))
    //     context.setAccount(newItem)
    // };
    
    function setParseSignOut(newItem) {
        localStorage.setItem('sign-out', JSON.stringify(newItem))
        context.setSignOut(newItem)
        console.log(context.signOut)
    }


    return (
        <>
        <Layout>
        <h1 className="font-bold text-2xl text-center mb-6 w-80 mt-10"
        >Welcome</h1>
            <div className="flex flex-col w-80 gap-4">
            <p>
                    <span className="font-medium text-xl">Email: </span>
                    <span className=" text-lg">Luis@platzi.com</span>
                </p>
                <p>
                    <span className="font-medium text-xl">Password: </span>
                    <span className="text-lg font-medium">********</span> 
                </p>
                <Link 
                to="/"
                >
                    <button
                    className="bg-black disabled:bg-black/40 text-white
                    w-full rounded-lg py-3 mt-4 text-xl font-bold"
                    // disabled={!hasUserAnAccount}
                    onClick={() => setParseSignOut(true)}
                    >Login</button>
                </Link>
                <div className="text-center">
                    <a className="font-normal text-lg" href="/">Forgot my password</a>
                </div>
                <button className=" border border-black disabled:text-black/40
                disabled:border-black/40 rounded-lg mt-4 py-3 text-xl font-bold"
                // disabled={hasUserAnAccount}
                >Signing
                </button>
            </div>
        </Layout>
        </>
    )
}

export default Signing
