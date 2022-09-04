import { Fragment } from 'react';
import Link from 'next/link';
const Loader = () => {
    return (
        <Fragment>
            <img
                src="https://ershemug.sirv.com/anonymous-app/loader.gif"
                alt="loader"
                width={'100px'}
                className="mx-auto"
            />
            {/* display if not authorized */}
            <Link href={'/'}>
                <a className="px-5 py-1 rounded-md bg-slate-500 w-full">
                    Go Home
                </a>
            </Link>
        </Fragment>
    );
};

export default Loader;