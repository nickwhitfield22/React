import Card from "../ui/Card";

function Home() {
  return (
    <section className="my-5 md:grid md:grid-cols-2 md:gap-5">
      <Card
        header="cabin"
        info="This is the cabin i stayed in a few months ago. pretty nice"
        src="/public/Cabin.jpg"
      />
      <Card
        header="cabin"
        info="This is the cabin i stayed in a few months ago. pretty nice"
        src="/public/Cabin.jpg"
      />
    </section>
  );
}

export default Home;
