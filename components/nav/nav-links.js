import {
  faUser,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faPlusSquare, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function NavLinks() {
  return (
    <div className="flex flex-row w-full justify-evenly sm:flex-col sm:justify-start sm:m-5 p-3">
      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faHomeAlt} size="xl" />

            <h1 className="dark:text-white hidden md:flex  ml-5"> Home </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <h1 className="dark:text-white hidden md:flex  ml-5"> Messages </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faHeart} size="xl" />
            <h1 className="dark:text-white hidden md:flex  ml-5">
              {" "}
              Notifications{" "}
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faPlusSquare} size="xl" />
            <h1 className="dark:text-white hidden md:flex  ml-5"> Create </h1>
          </div>
        </Link>
      </div>

      <div className="flex sm:my-5 items-center	 ">
        <Link href="/profile" className="text-xl active:font-bold">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faUser} size="xl" />
            <h1 className="dark:text-white hidden md:flex  ml-5"> Profile </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
