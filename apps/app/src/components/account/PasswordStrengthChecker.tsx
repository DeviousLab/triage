import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import zxcvbnEnPackage from '@zxcvbn-ts/language-en';

type PasswordProps = {
  password: string;
};

const PasswordStrengthChecker = ({ password }: PasswordProps) => {
  const options = {
    translations: zxcvbnEnPackage.translations,
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
      ...zxcvbnEnPackage.dictionary,
    },
  };

  zxcvbnOptions.setOptions(options);

  const passwordStrength = zxcvbn(password ?? '');
  const num = (passwordStrength.score * 100) / 4;

  const createPassLabel = () => {
    switch (passwordStrength.score) {
      case 0:
        return '';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  const ProgressColor = () => {
    switch (passwordStrength.score) {
      case 0:
        return 'none';
      case 1:
        return '#e53935';
      case 2:
        return '#fdd835';
      case 3:
        return '#c0ca33';
      case 4:
        return '#43a047';
      default:
        return 'none';
    }
  };

  const ProgressColorBackground = () => {
    switch (passwordStrength.score) {
      case 0:
        return 'none';
      case 1:
        return '#ef9a9a';
      case 2:
        return '#fff59d';
      case 3:
        return '#e6ee9c';
      case 4:
        return '#a5d6a7';
      default:
        return 'none';
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: ProgressColor(),
  });

  return (
    <>
      {passwordStrength.score >= 1 && (
        <div className="relative">
          <div
            className="mb-1 flex h-2 overflow-hidden rounded text-xs"
            style={changePasswordColor()}
          ></div>
          <div className="mr-2 text-right">
            <div>
              <span
                className="mt-1 inline-block rounded-full py-1 px-2 text-sm font-semibold uppercase"
                style={{
                  color: ProgressColor(),
                  backgroundColor: ProgressColorBackground(),
                }}
              >
                {createPassLabel()}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PasswordStrengthChecker;
