import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from "lucide-react";
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        
        {/* Dados da música */}
        <div className='flex items-center gap-3'>
          <Image src="/album.jpg" width={56} height={56} alt="Capa de álbum" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Limbo</strong>
            <span className='text-xs text-zinc-400'>Dudu</span>
          </div>
        </div>
        
        {/* Player */}
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play fill='bg-black' />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>

            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>

            <span className='text-xs text-zinc-400'>3:39</span>
          </div>
        </div>
        
        {/* Botôes auxiliares */}
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume2 size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    )
}