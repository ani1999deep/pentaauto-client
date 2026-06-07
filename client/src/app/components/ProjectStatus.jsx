export default function ProjectStatus({ status }) {
  return (
    <span
      className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-semibold ${
        status === 'Student' ? 'status-student' : 'status-teacher'
      }`}
    >
      {status}
    </span>
  );
}