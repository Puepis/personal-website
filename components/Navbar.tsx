import { useRouter } from "next/router";
import Link from "next/link";
import { FunctionComponent } from "react";
import { isActiveLink } from "../src/utils/helpers";
import { AnimateSharedLayout, motion } from "framer-motion";
import { usePaginator } from "../src/utils/hooks";

const Navbar: FunctionComponent = () => {
  const { pages, paginate } = usePaginator();
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <AnimateSharedLayout>
      <nav className="flex flex-row space-x-4 justify-center">
        {pages.map(({ name, href }) => (
          <Link key={name} href={href} scroll={false}>
            <a
              className={`text-base ${isActiveLink(href, currentPath) ? "font-medium" : ""}`}
              onClick={() => paginate(name)}
            >
              {name}
              {isActiveLink(href, currentPath) && (
                <motion.div layoutId="navigation-underline" className="navigation-underline" animate />
              )}
            </a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};
export default Navbar;
