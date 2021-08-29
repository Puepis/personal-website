import { useRouter } from "next/router";
import { FunctionComponent } from "react";

type Props = {
  pages: { name: string; route: string }[];
};

const Navbar: FunctionComponent<Props> = ({ pages }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-row space-x-4 justify-center">
      {pages.map((page, index) => (
        <a key={index} href={page.route}>
          <p className={`text-lg ${router.asPath === page.route ? "underline font-medium" : ""}`}>{page.name}</p>
        </a>
      ))}
    </div>
  );
};
export default Navbar;
