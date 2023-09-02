// a common layout file for all auth pages (including sign in, sign up, forgot password, etc.)
const AuthLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="flex items-center justify-center h-full">
			{children}
		</div>
	);
};

export default AuthLayout;
