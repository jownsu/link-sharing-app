import DevlinkLogo from "@/app/_components/DevlinkLogo";
import LoginForm from "./_component/LoginForm";

const LoginPage = () => {
    return (
        <div
            id="login_page"
            className="flex h-screen flex-col justify-center p-[3.2rem] md:items-center"
        >
            <DevlinkLogo className="mb-[5.8rem] self-start md:mb-[4.4rem] md:self-center" />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
