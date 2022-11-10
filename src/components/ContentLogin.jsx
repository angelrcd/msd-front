import "./ContentLogin.css";
import FormLogin from "./FormLogin.jsx";

function ContentLogin (){
    return (
    <div class="bg-[url('./img/background.jpg')] h-screen w-full bg-cover flex flex-col justify-start items-center">
        <h2 class="font-bluetea text-8xl text-black mb-16 mt-28">SWEETDREAMS</h2>
        <FormLogin />
        <div class="bg-blue-800 rounded-2xl py-1 px-6 bg-opacity-50 my-2 text-opacity-100"><p class="text-white">Forgot password? | Don’t have an acoount yet? <a href="" class="underline">Sign up</a></p></div>
    </div>
    );
}

export default ContentLogin;
