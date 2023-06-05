export default function readmeMakeUp(repo: any) {

  /** Selects README file with content and delete unnecessary components */
  if (repo.object !== null) {
    const readme = repo.object?.text.replace(/<!--[\s\S]*?-->/g, '');
    return readme.replace(/<img\b[^>]*>/g, '');
  }
  if (repo.otherFile !== null) {
    const readme = repo.otherFile?.text.replace(/<!--[\s\S]*?-->/g, '');
    return readme.replace(/<img\b[^>]*>/g, '');
  }
  if (repo.upCase !== null) {
    const readme = repo.upCase?.text.replace(/<!--[\s\S]*?-->/g, '');
    return readme.replace(/<img\b[^>]*>/g, '');
  }
  return '';
}