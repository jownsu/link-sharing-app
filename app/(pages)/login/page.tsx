import DevlinkLogo from "@/app/_components/DevlinkLogo";
import LoginForm from "./_component/LoginForm";

const LoginPage = () => {
    return (
        <div id="login_page" className="flex flex-col p-[3.2rem] md:justify-center md:items-center h-screen">
            <DevlinkLogo className="mb-[5.8rem] md:mb-[4.4rem]" />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
