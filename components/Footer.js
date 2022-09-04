import { useRouter } from "next/router"

const Footer = () => {
    // const router = useRouter();

    return (
        <div className={`text-center mb-4`}>
            <p className="text-xl">
                made with ❤️ by <span className="mx-2 px-2 py-1 bg-indigo-600 rounded-md">Arnold</span>
            </p>
        </div>
    )
}

export default Footer
