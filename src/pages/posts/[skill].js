import { useRouter } from "next/router";

function Skill({ posts = {} }) {
  const router = useRouter();
  if (router.isFallback) return <h1>Carregando...</h1>;
  return (
    <div>
      Profile {router.query.id}
      <p>{posts.id}</p>
      <p>{posts.name}</p>
      <p>{posts.email}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const listOfPosts = [
    {
      id: 1,
      name: "react",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "next",
      email: "vargattjh@april.biz",
      username: "Antonette",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
  ];

  const posts = listOfPosts.find((post) => {
    return context.params.skill === post.name;
  });
  return {
    props: {
      posts,
      revalidate: 10,
    },
  };
}

export async function getStaticPaths() {
  const posts = [
    {
      id: 1,
      name: "react",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "next",
      username: "Antonette",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
  ];

  const paths = posts.map((post) => {
    return { params: { skill: String(post.name) } };
  });
  return {
    paths,
    fallback: false,
  };
}
export default Skill;
