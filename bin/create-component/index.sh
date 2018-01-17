#!/bin/bash
CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $CWD
DIR="$CWD/../../src/components/$1"

rm -rf "$DIR"
mkdir "$DIR"
touch "$DIR/$1.js"
touch "$DIR/$1.scss"
touch "$DIR/$1.php"

echo "<?php
  /**
   * $1 component
   *
   * <Description>
   */
  merge_props(array(
    'heading' => __('Lorem ipsum', '$1')
  ));

  \$attributes = [
    'class' => '$1'
  ];
?>
<div <?php the_attributes(\$attributes); ?>>

</div>" >> "$DIR/$1.php"
echo ".$1 {

}" >> "$DIR/$1.scss"

echo "import './$1.scss'" >> "$DIR/$1.js"
