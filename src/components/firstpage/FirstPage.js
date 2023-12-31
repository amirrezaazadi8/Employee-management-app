import React from 'react';
import "./Firstpage.css";
import { Link } from 'react-router-dom';

const FirstPage = () => {
    return (
        <div className='main'>
            <section>
                <h1 className='header'>Employee Management app</h1>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
            </section>

            <section className='twoSection'>
                <div className='link'>
                    <Link to='/addemployee'>add employee</Link>
                </div>
                <div className='link'>
                    <Link to='/listemployee'>list of employees</Link>
                </div>
            </section>
            <p>development by <a href='https://github.com/amirrezaazadi8'>Amirreza Azadi</a></p>
        </div>
    )
}

export default FirstPage;