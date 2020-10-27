export default function Details({ slug }) {
  return <div>Details: {slug}</div>;
}

//
// It also fails when un-commenting getStaticPaths
//
// export const getStaticPaths = () => {
//   return {
//     paths: [
//       {
//         params: {
//           slug: "slug-1",
//         },
//         locale: "de",
//       },
//       {
//         params: {
//           slug: "slug-1",
//           locale: "en",
//         },
//       },
//     ],
//     fallback: true,
//   };
// };

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};
