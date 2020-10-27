import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const Router = useRouter();

  return (
    <div>
      <p>Home</p>
      <ul>
        <li>
          <NextLink href="/details/slug-1" passHref locale="de">
            <a>/de/details/slug-1</a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/details/slug-1" passHref locale="en">
            <a>/en/details/slug-1</a>
          </NextLink>
        </li>
        <li>
          <button
            onClick={() => {
              Router.push("/details/slug-1", undefined, {
                locale: "de",
              });
            }}
          >
            /de/details/slug-1
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              Router.push("/details/slug-1", undefined, {
                locale: "en",
              });
            }}
          >
            /en/details/slug-1
          </button>
        </li>
      </ul>
    </div>
  );
}
