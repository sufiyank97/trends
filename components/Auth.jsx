import React,{useState} from 'react'
import { ApolloConsumer } from '@apollo/client';

import { LOGIN } from '../apollo/remote/queries';
import { currentUser } from '../apollo/client';
const Auth = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
      });
    return (
        <ApolloConsumer>
            {
                client=>(
                    <div className="h-screen flex items-center justify-center">
                        <div className="flex flex-col items-center justify-between w-400 h-300" style={{boxShadow:'5px 5px 5px 0 #ccc',padding:'1rem 2rem',border:'1px solid #ccc'}}>
                            <h1 className="uppercase font-semibold text-black text-14">login</h1>
                            <div className="flex flex-col">
                                <input type="text" name="" value={values.email}
                                    onChange={e => setValues({ ...values, email: e.target.value })} placeholder="Email" className="text-14 outline-none" style={{padding:'0.2rem',borderRadius:'.3rem',margin:'.5rem 0',width:'20rem',border:'1px solid black',height:'2rem'}} id="" />
                                <input type="password" name="" value={values.password}
                                    onChange={e =>
                                    setValues({ ...values, password: e.target.value })
                                    } placeholder="Password" className="text-14 outline-none" style={{padding:'0.2rem',borderRadius:'.3rem',margin:'.5rem 0',width:'20rem',border:'1px solid black',height:'2rem'}} id="pass" />
                            </div>
                            <span className="text-20 capitalize px-2 py-2 cursor-pointer" onClick={async()=>{
                                const { email, password } = values;
                                const { data } = await client.query({
                                  query: LOGIN,
                                  variables: { email, password }
                                });
                                console.log(data.login, 'LOGIN DATA');
                                currentUser(data.login);
                            }} style={{border:'1px solid black'}}>login</span>
                        </div>
                    </div>
                )
            }
        </ApolloConsumer>
    )
}

export default Auth
