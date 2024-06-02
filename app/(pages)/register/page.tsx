import DevlinkLogo from "@/app/_components/DevlinkLogo";
import RegisterForm from "./_component/RegisterForm";

const LoginPage = () => {
    return (
        <div id="login_page" className="flex flex-col p-[3.2rem] md:justify-center md:items-center h-screen">
            <DevlinkLogo className="mb-[5.8rem] md:mb-[4.4rem]" />
            <RegisterForm />
        </div>
    );
};

export default LoginPage;
