import { databases, users } from "@/models/server/config";
import React from "react";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import NumberTicker from "@/components/magicui/number-ticker";
import { answerCollection, db, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";

type Props = {
  params: Promise<{ userId: string; userSlug: string }>;
};

export default async function Page({ params }: Props) {
  const { userId } = await params;

  // ✅ Appwrite v13 compatible
  const [user, questions, answers] = await Promise.all([
    users.get(userId),
    databases.listDocuments(db, questionCollection, [
      Query.equal("authorId", userId),
      Query.limit(1),
    ]),
    databases.listDocuments(db, answerCollection, [
      Query.equal("authorId", userId),
      Query.limit(1),
    ]),
  ]);

  return (
    <MagicContainer className="flex h-125 w-full flex-col gap-4 lg:h-62.5 lg:flex-row">
      <MagicCard className="flex w-full flex-col items-center justify-center p-20 shadow-2xl">
        <h2 className="text-xl">Reputation</h2>
        <NumberTicker value={user.prefs?.reputation || 0} />
      </MagicCard>

      <MagicCard className="flex w-full flex-col items-center justify-center p-20 shadow-2xl">
        <h2 className="text-xl">Questions asked</h2>
        <NumberTicker value={questions.total || 0} />
      </MagicCard>

      <MagicCard className="flex w-full flex-col items-center justify-center p-20 shadow-2xl">
        <h2 className="text-xl">Answers given</h2>
        <NumberTicker value={answers.total || 0} />
      </MagicCard>
    </MagicContainer>
  );
}