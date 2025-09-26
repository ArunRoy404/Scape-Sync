import Loader from "@/components/UI/Loader";

const LoadingPage = () => {
    return (
        <main className="h-[100dvh] w-[100dvw] flex items-center justify-center">
            <Loader size={100} color='green' />
        </main>
    );
};

export default LoadingPage;