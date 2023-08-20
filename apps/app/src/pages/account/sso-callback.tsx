import {
  AuthenticateWithRedirectCallback,
} from "@clerk/clerk-react";

type SocialProviderProps = {
  message: string;
}

const SocialProvider = ({ message }: SocialProviderProps) => {
  return (
    <div className="mt-2">
      <AuthenticateWithRedirectCallback />
    </div>
  );
};
export default SocialProvider;
