import { Helmet } from "react-helmet-async";
import Container from "../Component/Container";

const Blogs = () => {
  return (
    <Container>
      <Helmet>
        <title>Travelia | Blogs</title>
      </Helmet>
      <div>
        <h1>this is blogs page</h1>
      </div>
    </Container>
  );
};

export default Blogs;
