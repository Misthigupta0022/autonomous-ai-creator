type Props = {
  response: string;
};

export default function ResponseBox({ response }: Props) {
  if (!response) return null;

  return (
    <div className="max-w-4xl mx-auto mt-8 border rounded-xl p-6 bg-gray-50 whitespace-pre-wrap">
      {response}
    </div>
  );
}