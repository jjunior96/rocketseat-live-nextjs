interface TopicsListProps {
  title: string;
  topics?: string[];
}

export function TopicsList({ title, topics }: TopicsListProps) {
  return (
    <div className="mb-4 text-gray-300">
      {title}
      <ul className="list-disc ml-6 mt-2">
        {topics?.map((topic, index) => (
          <li key={index} className="tracking-[-.01em]">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
