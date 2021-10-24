import React from 'react'
// import { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }

    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="my-3 bd-title">About Us</h1>
                <p className="lead ">
                    Learn more about the <strong>TextStar</strong>, who created this, what's its features are and what techs are included.
                </p>
                <div>
                    <h2>Introduction</h2>
                    <p className="lead ">
                        Basically, <strong>TextStar</strong> is a utility which can be used to manipulate your text in the way you want. This includes many features like covert text to Uppercase, to Lowercase, Copy text to clipboard, Remove extra spaces in the text and Clear text. It also provide user to see counting of words and characters entered by them. And provided Minute Count time to read the text. Here is one more feature to preview all the text that user entered.
                    </p>
                </div>
                <div>
                    <h2>Tech Included</h2>
                    <p className="lead ">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>React Router</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h2>Creator</h2>
                    <p className="lead">
                        Hey there, I'm <strong>Atul Tripathi</strong> from India.
                        My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                        <br />
                        I am also an <strong>open-source</strong> enthusiast and maintainer. I learned a lot from the open-source community and I love how <strong>collaboration and knowledge sharing</strong> happened through open-source.
                    </p>
                </div>
                <br />
                <div>
                    <h2>Some Lines from Creator</h2>
                    <ul>
                        <li>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className="lead">
                                        A person can ruin or succeed you, but it all depends on you what you wants to be. So always choose your best, because that's your life and you have to be perfect for yourself.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer text-end">
                                    Atul Tripathi
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className="lead">
                                        If you find a person who actually cares you, don't leave him/her because he/she is the one who really wants to give you the real happiness.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer text-end">
                                    Atul Tripathi
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className="lead">
                                        Always remember that, the right time never comes because right time in present to do something for yourself is now. So, use it and do your best to achieve your goals.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer text-end">
                                    Atul Tripathi
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Last but not Least!</h2>
                    <p className="lead">
                        How to reach me -
                        <ul class="list-inline my-3">
                            <li class="list-inline-item">
                                <a href="https://twitter.com/atultrp_">
                                    <button type="button" class="btn btn-dark">Twitter</button>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://github.com/atultrp">
                                    <button type="button" class="btn btn-dark">GitHub</button>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://instagram.com/atultrp">
                                    <button type="button" class="btn btn-dark">Instagram</button>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/atultrp-">
                                    <button type="button" class="btn btn-dark">LinkedIn</button>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="mailto: atul31815@gmail.com">
                                    <button type="button" class="btn btn-dark">Send Email</button>
                                </a>
                            </li>
                        </ul>
                        Created by using coding skills with love 💙️ by - <a href="https://github.com/atultrp">
                        <button type="button" class="btn btn-light">Atul Tripathi</button>
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
