import React from 'react';
import consultant1 from "../../../images/consultant1.jpg";
import consultant2 from "../../../images/consultant2.jpg";
import consultant3 from "../../../images/consultant3.jpg";
import consultant4 from "../../../images/consultant4.jpg";
import consultant5 from "../../../images/consultant5.jpg";
import consultant6 from "../../../images/consultant6.jpg";
import AuthorsDetail from '../AuthorsDetail/AuthorsDetail';

import './Authors.css';

const authorsData = [
    {
        name: 'Rishad',
        authorImg: consultant1

    },
    {
        name: 'Ratri',
        authorImg: consultant2

    },
    {
        name: 'Prantik',
        authorImg: consultant3

    },
    {
        name: 'Jahid',
        authorImg: consultant4

    },
    {
        name: 'Zayed',
        authorImg: consultant5

    },
    {
        name: 'Arob',
        authorImg: consultant6

    },
]

const Authors = () => {
    return (
        <section className="authors mt-5 pt-5">
            <div className="container h-100 ">
                <div className="row">
                <div className="col-md-6 col-sm-12 mt-5">
                        <p className="fs-5">KNOW YOUR AUTHOR</p>
                        <h2 className="text-primary text-uppercase">Each course you undertake are designed by these authors</h2>
                        <p className="underline-author mt-2"></p>
                        <p className="mt-2 mb-3">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        <p className="mb-3">Explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is</p>

                        <button className="border-gradient-red text-white mx-2 mt-4">How to Become an Author?</button>
                    </div>
                    <div className="row mt-5 col-md-6">
                        {
                            authorsData.map(author => <AuthorsDetail author={author} />)
                        }
                        </div>
                    </div>

                </div>
        </section>
    );
};

export default Authors;