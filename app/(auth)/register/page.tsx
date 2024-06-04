import DevlinkLogo from "@/app/_components/DevlinkLogo";
import RegisterForm from "./_component/RegisterForm";

const LoginPage = () => {
    return (
        <div
            id="login_page"
            className="flex h-screen flex-col justify-center p-[3.2rem] md:items-center"
        >
            <DevlinkLogo
                responsive={false}
                className="mb-[5.8rem] md:mb-[4.4rem]"
            />
            <RegisterForm />
        </div>
    );
};

export default LoginPage;
