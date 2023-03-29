import { Link } from 'react-router-dom'
import { POPUPS } from '../../../helpers/constants/allPopups'
import { callPopup } from '../../../helpers/utils/callPopup'
import { getImageUrl } from '../../../helpers/utils/getImageUrl'
import { Block } from '../../../Ui/Block/Block'
import s from './CaseChapter.module.scss'
import { CaseChapterProps } from './types'

export const CaseChapter: React.FC<CaseChapterProps> = ({ chapterFiles }) => {
  return (
    <Block justify='between' width='100%'>
      {chapterFiles.map((file) => {
        const caseImage = getImageUrl(file.imgPath)
        return (
          <div key={file.alt}>
            <Block>
              <Link
                className={s.link}
                to={callPopup(POPUPS.CASE_FILE)}
                state={file}
              >
                <img className={s.caseImage} src={caseImage} alt='Newspaper' />
                <p>{file.alt}</p>
              </Link>
            </Block>
          </div>
        )
      })}
    </Block>
  )
}