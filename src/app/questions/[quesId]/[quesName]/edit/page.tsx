import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import type { Models } from "appwrite";
import EditQues from "./EditQues";

type PageProps = {
  params: {
    quesId: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const question = await databases.getDocument<
    Models.Document & {
      authorId: string;
      title: string;
    }
  >(
    db,
    questionCollection,
    params.quesId
  );

  return <EditQues question={question} />;
};

export default Page;