import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <ul>
        <li>
          <NextLink href="/details/slug-1" passHref locale="de">
            <a>/de/details</a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/details/slug-1" passHref locale="en">
            <a>/en/details</a>
          </NextLink>
        </li>
      </ul>
    </div>
  );
}
