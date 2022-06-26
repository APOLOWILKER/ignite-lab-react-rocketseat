import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
// existem 2 bibliotecas para trabalhar com datas no react: o day js e o date-fns.

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{slug: string}>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug;

  // Segunda • 21 de junho • 19h00
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>
      {availableDateFormatted}
      </span>
{/* 
      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500': ''}`}>
      Esse seria um formato de fazer css condicional com Tailwind

*/}
      <div className={classnames( ' rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson,
      })} >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
              <span className={classnames('text-sm font-medium flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson,
              })}>
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
            ) : (
              <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20}/>
              Em breve
            </span>
            )
          }

          <span className={classnames('text-xs py-[0.125rem] rounded px-2 text-white border font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classnames(' mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}