import Link from 'next/link'

export default function Logo() {
  return (
        <Link href="/" className="block" aria-label="Cruip">
            <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc2775636-9f30-408a-8e35-d6c8db330690%2F08333e4c-6579-420c-9c5f-51007daee52d%2F%25E8%25B5%2584%25E6%25BA%2590_160.png?id=8bf8e8ae-4f0e-433f-b9de-12389b9b52a5&table=collection&spaceId=c2775636-9f30-408a-8e35-d6c8db330690&width=60&userId=8a71bbc8-c783-44d9-9444-95fe42407a2d&cache=v2">
                <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
                        <stop stopColor="#4FD1C5" offset="0%" />
                        <stop stopColor="#81E6D9" offset="25.871%" />
                        <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
                <text x="42%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="24" fontFamily="'Century Gothic'" fontWeight="700" fontStyle="italic" fill="white">
                    N
                </text>
            </svg>
        </Link>
  )
}
