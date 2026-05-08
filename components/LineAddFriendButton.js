export default function LineAddFriendButton({ className = '' }) {
  return (
    <a
      href="https://lin.ee/WgiGiVS"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center hover:opacity-90 transition-opacity ${className}`}
    >
      <img
        src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
        alt="เพิ่มเพื่อน"
        height="36"
        style={{ height: 36, border: 0 }}
      />
    </a>
  )
}
