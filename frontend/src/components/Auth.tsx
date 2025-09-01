import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { LabelledInput } from "./LabelledInput"
import type { SignupInput } from "@gireeshkoshe/medium-common"
import { useState } from "react"
import { BACKEND_URL } from "../Config"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: ""
  })
  const navigate=useNavigate();
  async function sendRequest() {
    try{
        const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signin"?"signin":"signup"}`,postInputs)
        const jwt= response.data;
        localStorage.setItem("jwt",jwt);
        navigate("/blogs")
    }catch(e){
        alert(
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
        </div>
        )
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-8">
            <div className="text-3xl font-extrabold">
              {type=='signin'?"Sign in an Account":"Create an Account"}
            </div>
            <div className="text-slate-400">
              {type=='signin'?"Don't have an Account ?": "Already have an account ?"}
              <Link className="pl-2 underline" to={type=='signup'?"/signin":"/signup"}>
                {type=='signup'?"Login":"Sign Up"}
              </Link>
            </div>
          </div>

          <div className="pt-3 font">
            {type=="signin"?null:(<LabelledInput
              label={"Name"}
              placeholder={"Gireesh"}
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value
                })
              }}
            />)}

            <LabelledInput
              label={"Email"}
              placeholder={"gireesh@gmail.com"}
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value
                })
              }}
            />

            <LabelledInput
              label={"Pasword"}
              placeholder={"*******"}
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value
                })
              }}
            />
            <button onClick={sendRequest} type="button" className="mt-6 text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type=='signin'?"Sign In":"Sign Up"}</button>
          </div>
        </div>
      </div>
    </div>
  )  
}
