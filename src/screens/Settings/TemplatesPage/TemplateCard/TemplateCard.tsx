import React from 'react';
import {Span, P, Button} from 'neutrino-ui';
import {useRefs} from '@/context';
import {useSettings} from '../../SettingsContext';
import {Card, TemplateDescription, CardFooter} from './styles';

type Props = {
  id: number;
  enabled: boolean;
};

export function TemplateCard(props: Props) {
  const {handleSetTemplate} = useSettings();
  const {id, enabled} = props;
  const {getCheckCategoryById} = useRefs();
  const category = getCheckCategoryById(id);

  const addOrRemoveTemplate = React.useCallback(() => {
    handleSetTemplate(id, !enabled);
  }, [enabled, handleSetTemplate, id]);

  return (
    <Card>
      <div css={{height: 200}}>head img</div>
      <TemplateDescription>
        <Span css={{fontWeight: 600}}>{category?.name}</Span>
        <P css={{color: 'var(--color-text-secondary)', fontSize: 12, paddingTop: 2}}>
          Краткое описание бизнес-шаблона про Безопасность на объекте. Шаблон предназначен для детектирования
          людей по камерам, а также фиксации потенциально опасных ситуаций.
        </P>
        <div
          css={{
            position: 'absolute',
            bottom: 0,
            left: 20,
            width: 'calc(100% - 40px)',
            height: 1,
            backgroundColor: 'var(--color-border)',
          }}
        ></div>
      </TemplateDescription>
      <CardFooter>
        <Button
          variant="primary"
          flat
          css={{minHeight: 36, height: 36, fontSize: 14}}
          onClick={addOrRemoveTemplate}
        >
          {enabled ? 'Отключить' : 'Добавить'}
        </Button>
      </CardFooter>
    </Card>
  );
}
