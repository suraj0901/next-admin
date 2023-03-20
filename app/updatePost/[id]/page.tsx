interface Context {
  params: {
    id: string;
  };
}

export default function UpdatePost({ params }: Context) {
  const id = params.id;
  return (
    <div>
      <h1>Update Post {id}</h1>
    </div>
  );
}
