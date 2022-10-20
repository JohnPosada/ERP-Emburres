import { CiInstagram, CiFacebook, CiTwitter, CiPhone } from 'react-icons/ci';

export const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <footer className="bg-white rounded-lg shadow md:flex md:justify-between md:p-6 dark:bg-gray-800">
        <span className=" text-black-500 sm:text-center dark:text-gray-400">
          © 2022 | Emburres
        </span>
        <div className=" text-gray-400 flex flex-wrap items-center mb-6 sm:mb-0 ">
          <p className="hover:underline hover:cursor-pointer md:mr-12">
            Contactános
          </p>
          <CiInstagram
            className="text-gray-400 hover:underline md:mr-12"
            style={{ fontSize: '35px' }}
          />
          <CiFacebook
            className="text-gray-400 hover:underline md:mr-12"
            style={{ fontSize: '35px' }}
          />
          <CiTwitter
            className="text-gray-400 hover:underline md:mr-12"
            style={{ fontSize: '35px' }}
          />
          <CiPhone
            className="text-gray-400 hover:underline md:mr-12 "
            style={{ fontSize: '35px' }}
          />
        </div>
      </footer>
    </div>
  );
};
