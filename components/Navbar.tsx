import { useRouter } from "next/router";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
  pages: { name: string; route: string }[];
};

const Navbar: FunctionComponent<Props> = ({ pages }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-row space-x-4 justify-center">
      {pages.map((page, index) => (
        <Link key={index} href={page.route} scroll={false}>
          <a className={`text-base ${router.asPath === page.route ? "underline font-medium" : ""}`}>{page.name}</a>
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
