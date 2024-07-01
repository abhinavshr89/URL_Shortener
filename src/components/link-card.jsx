import React from 'react'
import { Link } from 'react-router-dom'
import { Delete, Download, LinkIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'
import useFetch from '@/hooks/use-fetch'
import { deleteUrl } from '@/db/apiUrl'
import { Trash } from 'lucide-react'
import { BeatLoader } from 'react-spinners'
const LinkCard = ({ url, fetchUrls }) => {
  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title; // Desired file name for the downloaded image

    
    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;

  
    document.body.appendChild(anchor);

   
    anchor.click();

    document.body.removeChild(anchor);
  };

  const {loading: loadingDelete, fn: fnDelete} = useFetch(deleteUrl, url.id);
  return (
    <div className='flex flex-col md:flex-row gap-5 border p-4 bg-gray-900 rounded-lg'>

      <img src={url?.qr} className="h-32 object-contain ring ring-blue-500 self-start"
        alt="qr code" />
      <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
        <span className="text-2xl font-bold   md:text-3xl  mr-auto ">
          {url?.title}
        </span>

        <span className="block p-2  rounded-md max-w-full">
          <p className="mr-auto break-words text-left text-sm md:text-base text-blue-400 font-bold hover:underline">
            https://trimrr.in/{url?.custom_url ? url?.custom_url : url.short_url}
          </p>
        </span>

        <span className="flex items-center gap-1 hover:underline cursor-pointer text-left">
          <LinkIcon className="p-1" />
          {url?.original_url}
        </span>
        <span className="flex items-end font-extralight text-sm flex-1">
          {new Date(url?.created_at).toLocaleString()}
        </span>
      </Link>

      <div className="flex gap-2">
        <Button variant="ghost"
          onClick={() =>
            navigator.clipboard.writeText(`https://trimrr.in/${url?.short_url}`)
          }>
          <Copy />
        </Button>
        <Button variant="ghost" onClick={downloadImage}>
          <Download />
        </Button>
        <Button variant="ghost" onClick={()=>fnDelete().then(()=>fetchUrls())}>
        {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash />}
        </Button>
      </div>
    </div>
  )
}

export default LinkCard;